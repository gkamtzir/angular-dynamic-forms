// Intefaces
import { IOption } from './options.interface';
import { IValidation } from './validation.interface';

// Enumerations
import { ElementType } from '../enumerations/element-type.enum';
import { VisibilityState } from '../enumerations/visibility-state.enum';

export interface IConfiguration {
  id: string;
  name: string;
  type: ElementType;
  options?: IOption[];
  validations?: IValidation[];
  visibility: VisibilityState;
}
