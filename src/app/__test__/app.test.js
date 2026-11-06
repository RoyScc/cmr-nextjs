import { describe, it, expect } from 'vitest';
import { loginSchema } from '@/app/validations/loginSchema';
import { formatNombreTurno, formatHora } from '@/utils/formatters';

describe('Pruebas Unitarias de CMR', () => {

  it('1. loginSchema debe aceptar credenciales válidas', () => {
    const datosValidos = { username: 'admin', password: 'password123' };
    const resultado = loginSchema.safeParse(datosValidos);
    expect(resultado.success).toBe(true);
  });

  it('2. loginSchema debe rechazar credenciales vacías', () => {
    const datosInvalidos = { username: '', password: '' };
    const resultado = loginSchema.safeParse(datosInvalidos);
    expect(resultado.success).toBe(false);
    expect(resultado.error.issues[0].message).toBe("El usuario es obligatorio");
  });

  it('3. formatNombreTurno debe unir nombre y apellido', () => {
    const resultado = formatNombreTurno('Juan', 'Pérez');
    expect(resultado).toBe('Juan Pérez');
  });

  it('4. formatHora debe recortar los segundos de la hora', () => {
    const resultado = formatHora('14:30:00');
    expect(resultado).toBe('14:30');
  });
});