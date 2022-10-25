import {AnySchema} from 'yup';
import {NextFunction, Request, Response} from 'express';

/**
 * Validates and clear the request body
 * based on a provided Yup Schema
 *
 * @param schema any Yup object
 */
export default function expectBody(schema: AnySchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    // TODO use the pattern -> throw error to be catched at handler
    if (!body) res.json({error: 'Missing body.'});

    await schema
      .validate(body, {stripUnknown: true})
      .then((parsed) => {
        req.body = parsed;
        next();
      })
      .catch((err) => {
        res.json({error: err.message});
      });
  };
}
