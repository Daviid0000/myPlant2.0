import { body } from "express-validator";

export const userSchema = [
    body('username')
    .exists()
    .notEmpty().withMessage('El username no puede estar vacío.')
    .isString().withMessage('El username debe contener unicamente letras.'),
    body('password')
    .exists()
    .notEmpty().withMessage('El password no puede estar vacío.')
    .isAlphanumeric().withMessage('El password debe contener letras, números y símbolos.'),
    body('email')
    .exists()
    .notEmpty().withMessage('El email no debe estar vacío.')
    .isEmail().withMessage('El email debe respetar el formato email')
]