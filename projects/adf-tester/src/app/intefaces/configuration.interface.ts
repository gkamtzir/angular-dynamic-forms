// Intefaces
import { IOption } from './options.interface';
import { IValidation } from './validation.interface';

// Enumerations
import { ElementType } from '../enumerations/element-type.enum';

export interface IConfiguration {
  [id: string]: IConfigurationDetails;
}

interface IConfigurationDetails {
  name: string;
  type: ElementType;
  options?: IOption[];
  validations?: IValidation[];
}
