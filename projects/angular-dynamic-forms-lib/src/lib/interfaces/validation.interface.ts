// Enumerations
import { ValidationType } from '../enumerations/validation-type.enum';

export interface IValidation {
  value?: string;
  type: ValidationType;
}
