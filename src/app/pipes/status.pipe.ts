import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(ativo: boolean): string {
    const INVALID_STATUS = ativo === null || ativo === undefined;

    if (INVALID_STATUS) {
      return 'Status indisponível ou inválido';
    }

    if (ativo) {
      return 'Ativo';
    }

    return 'Inativo';
  }
}
