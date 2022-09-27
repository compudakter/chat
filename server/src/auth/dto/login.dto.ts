import { OmitType } from "@nestjs/mapped-types";
import { RegistrationDTO } from "./registration.dto";

export class LoginDTO extends OmitType(RegistrationDTO,['email']){

}