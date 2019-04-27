import {IsNotEmpty, IsEmail, IsString, Matches} from 'class-validator';
export class UsuarioLoginDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
        //@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)
    password:string;
}
