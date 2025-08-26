import { config } from 'dotenv';
config();
export const serviceAccount = {
  type: 'service_account',
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCm7x7R70/h+uq6\nIG5fj5eh1oH3tno57GoTcU5Fg0PE+WtI4+mufLwwm7DlYUAx7SZvQDq9fsqSKLjd\nbw0l8PRIo6jSg4nhFSVtqeSnSKV3PlTqYzHuxOm7A/ppa7LZDuS+Y0TlTiS7GFPa\n4ymLhcql9Z2VcMhvFQnP60QhZOGZ0YJNEDRahlo7l33YdPF0n6eMkCQghqMNVQ57\nk7xgxqqljUJUJibaKT+vXP9diNLeV65KE48mO8MdSNZo4Bsq9LR9U92AqlSz3TJU\nTgleKVFR3ixAMsAQD1TSEh0ZlGiaVPT9FNvc2sDW/KSTVCrhmqstbiQmAot+62jp\ngOl34PTFAgMBAAECggEAR2j1EzM/RdkzfimPbZucbuO3N0M9J/glLGoE5KGRZPqZ\nVVYByd2cF2MSmh0u++yJy397YUKS31FCO59czYU0yroP5vXUDpAgMbhCkvj1p3vn\nkVibrJtZrOG3xk8G8+l2GqeWek0iU1LF1FXmmMPD+5iFL79OTo5+Yw4uV+ayxzxy\nlMA12+LvJOb8+kkOq27YGD13T0E4Ht/Qt/MEXxbCChUDz/LwuDnqSUlzyWWnt23o\nPgPMhMJyDmzKW1mj5py76CwmyQWKPAknW/3fPGnsSWtizhWNcrmQjZi+cqxixnX0\nwnPSQHuqZ4lTZMyxECbP0/jNTiJKzs5HqxnBa6fnBQKBgQDQicGTKM0+9nUH3c4j\nFWcqwfq8XcshCkJL2/Zi/dEgxTkN/qj2y0vaQOewxc8EgJ6D3mw/n+pDDUlWyNSP\nNzCsdwGp+LtoVZOkr1aRfKiWZQBeB0BNPx8ez4HFXycGXFfUCJ05M8jvTm8YQzjK\n1OEBtRg2DruyhpVUdXAJwMxSYwKBgQDM7Vmnpjb7sezn8ja8gaHjC2JkXceO1OoX\nr15pjrA9J8XYoI+U28lweDQwpJaFbGH4+XbovG5+h5NgB3MYTy8Xv/jQYVTrUByd\nJfSP+eQ4UKq9j/m/sPW7o1j6dLN7U97DwXaBe62OaAUiVQ4ud6fUFqafQClx4Au6\nNDAGjnqwtwKBgGLBmgZSwEAc/vcmt0QuEplRG6iw0k1nSlYaaOggQzU9sPNLskCN\nrfJB4nb4dj0vm+HfJ2xKEuqGFEEhAmiAPnCuOv9/Z2DVhgHrdxeW7U+rrSzaSj1K\nszYoFtCdayG8AWvMWIiKWZHalwnqa67CeXwRgtG20HSO/5DrvI8h2qD5AoGAJU9h\nb2CXyiOO2nwC8zc23juIYnWgi6TAKifHrLhJ5hiDsPkqqxOJDW0VM3YD4a7l94qT\n17PW+jp83pL8pYRlMpHFH0tZRq6DRylN6Zi5sHcfXvwDoJ77XnpTDOaKdv3CJSno\nBZMa+j5+EM4jkto+OCMXmw73fMAp4nD1/XubYukCgYEAn34xuHzatMioaLVJ+ctn\nxIRpbnmk3OQNxF7+Ct+DJ3YgK09+jTisz9Uq/jsFjETKsD9qccyb9eQbmCmMxUlu\nXKVxJiVwOnYfNKfBWoGh5KlFLk3lquEywbC08BV/rbpKj+g2nN17YKNpz2DqAv8w\nSc6xfzXV+vL3+1LbhiZjUsY=\n-----END PRIVATE KEY-----\n',
  client_email: process.env.client_email,
  client_id: process.env.client_id,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40authen-94726.iam.gserviceaccount.com',
  universe_domain: 'googleapis.com',
};
