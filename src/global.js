import Pusher from 'pusher-js'
import Echo from 'laravel-echo'
import { getToken } from './helpers'
import { options } from './config'

const pusherOptions = {
  ...options,
  auth: {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      Accept: "application/json",
    },
  },
};

export const echo = new Echo(pusherOptions);