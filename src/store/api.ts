export default class Api {
  static readonly tokenStorageKey = 'gnt-cc-token';

  static async get (slug: string) {
    const options = {
      method: 'GET'
    };

    return Api.authenticatedRequest(slug, options);
  }

  static async post (slug: string, body: object) {
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return Api.authenticatedRequest(slug, options);
  }

  static async authenticatedRequest (slug: string, options: any) {
    options = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${localStorage.getItem(Api.tokenStorageKey)}`
      }
    };

    return Api.request(slug, options);
  }

  static async request (slug: string, options: any) {
    if (slug.length > 0 && slug[0] === '/') {
      slug = slug.slice(1);
    }

    const url = `/api/v1/${slug}`;

    const response = await fetch(url, options);

    return response.json();
  }
}
