import PageNames from '@/data/enum/PageNames';
import router from '@/router';

interface Credentials {
  username: string;
  password: string;
}

export default class Api {
  static readonly tokenStorageKey = 'gnt-cc-token';

  static async get (slug: string) {
    const options = {
      method: 'GET'
    };

    return Api.request(slug, options);
  }

  static async post (slug: string, body: object) {
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return Api.request(slug, options);
  }

  static async request (slug: string, options: any) {
    options = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${localStorage.getItem(Api.tokenStorageKey)}`
      }
    };

    const response = await fetch(Api.buildUrl(slug), options);

    if (response.status === 401) {
      router.push({ name: PageNames.Login });
    }

    return response.json();
  }

  static async login (credentials: Credentials) {
    const response = await fetch(Api.buildUrl('login'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    return response.json();
  }

  private static buildUrl (slug: string) {
    if (slug.length > 0 && slug[0] === '/') {
      slug = slug.slice(1);
    }

    return `/api/v1/${slug}`;
  }
}
