import jwt from 'jsonwebtoken';

import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as CookieStrategy } from 'passport-cookie';

export const localStrategyAuth = new LocalStrategy(
  { passwordField: 'password', usernameField: 'account' },
  (username, _, done) => {
    done(null, username);
  }
);

export const cookieStrategyAuth = new CookieStrategy(
  (token: string, done: (arg0: null, arg1: unknown) => void) => {
    try {
      const user = jwt.verify(token, '123') as {
        userId: string;
        email: string;
      };

      done(null, user);
    } catch (err) {
      done(null, false);
    }
  }
);
