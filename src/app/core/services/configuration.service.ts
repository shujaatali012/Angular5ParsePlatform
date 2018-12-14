///// application configuration injectable service

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class ConfigurationService {

  private _serverUrl: string = null;
  private _parseAppId: string = null;
  private _parseClientKey: string = null;

  constructor() {

  }

  get serverUrl() {
    if (this._serverUrl == null)
      this._serverUrl = environment.SERVER_URL;

    return this._serverUrl;
  }

  get parseAppId() {
    if (this._parseAppId == null)
      this._parseAppId = environment.PARSE_APP_ID;

    return this._parseAppId;
  }

  get parseClientKey() {
    if (this._parseClientKey == null)
      this._parseClientKey = environment.PARSE_CLIENT_KEY;

    return this._parseClientKey;
  }
}
