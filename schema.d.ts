export interface paths {
  "/v1/user/data/{id}": {
    /** Public Informations from $USER */
    get: {
      parameters: {
        path: {
          id: string;
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: never;
        };
      };
    };
  };
  "/v1/user/activity/{UserID}": {
    /** User activity */
    get: {
      parameters: {
        path: {
          UserID: string;
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: never;
        };
      };
    };
  };
  "/v1/user/followers": {
    /** Followers */
    get: {
      parameters: {
        query: {
          userid: string;
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: never;
        };
      };
    };
  };
  "/v1/viewuser": {
    /** View Profile */
    post: {
      requestBody?: {
        content: {
          "application/x-www-form-urlencoded": {
            profileId?: string;
          };
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: never;
        };
      };
    };
  };
  "/v1/viewuser/profile-views/{UserID}": {
    /** getViewsByProfileId */
    get: {
      parameters: {
        path: {
          UserID: string;
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: never;
        };
      };
    };
  };
  "/v1/maintenance/": {
    /** Maintenance */
    get: {
      responses: {
        /** @description Successful response */
        200: {
          content: never;
        };
      };
    };
  };
  "/v1/other/updates/": {
    /** Updates */
    get: {
      responses: {
        /** @description Successful response */
        200: {
          content: never;
        };
      };
    };
  };
  "/v1/search": {
    /** Search */
    get: {
      parameters: {
        query?: {
          input?: string;
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: never;
        };
      };
    };
  };
  "/api.twitch.tv/helix/streams": {
    /** Twitch Status */
    get: {
      parameters: {
        query: {
          /** @example linear_fox */
          user_login: string;
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: never;
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: never;
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
