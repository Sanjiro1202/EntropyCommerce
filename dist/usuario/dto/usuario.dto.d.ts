export declare class crearUsuarioDto {
    cedula: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    telefono: string;
    direccion: string;
    correo: string;
    password: string;
}
declare const actualizarUsuarioDto_base: import("@nestjs/common").Type<Partial<crearUsuarioDto>>;
export declare class actualizarUsuarioDto extends actualizarUsuarioDto_base {
}
export {};
