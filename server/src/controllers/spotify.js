/* eslint-disable camelcase */
export const permitUser = async (req, res) => {
  const { default: env } = await import("config");
  const { error, data } = res.locals;

  if (error) return res.redirect(`/#${error}`);

  return res.redirect(`${env.FRONTEND_URL}${data}`);
};

export const refreshUser = (req, res) => {
  const { error, access_token } = res.locals;

  if (error) return res.status(400).send({ error });

  return res.status(200).send({ access_token });
};
