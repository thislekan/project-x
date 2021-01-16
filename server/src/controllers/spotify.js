/* eslint-disable camelcase */
export const permitUser = async (req, res) => {
  const { default: env } = await import("config");
  const { error, data } = res?.locals;
  const { access_token, refresh_token } = data;

  if (error) return res.status(401).send({ error });

  return res.redirect(
    `${env.FRONTEND_URL}loggedin/${access_token}/${refresh_token}`
  );
};

export const refreshUser = (req, res) => {
  const { error, access_token } = res.locals;

  if (error) return res.status(400).send({ error });

  return res.status(200).send({ access_token });
};
