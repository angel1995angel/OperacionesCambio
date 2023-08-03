import { Routes } from '@angular/router';
import { ConfigurarComponent } from 'src/app/pages/configurar/configurar.component';
import { BuscadorComponent } from 'src/app/pages/generico/buscador/buscador.component';
import { PerfilComponent } from 'src/app/pages/generico/perfil/perfil.component';
import { ReportesComponent } from 'src/app/pages/reportes/reportes.component';
import { AuthGuardGuard } from 'src/app/services/seguridad/auth-guard.guard';
import { AdministracionComponent } from 'src/app/pages/principal/administracion/administracion.component';
import { SistemasComponent } from 'src/app/pages/principal/administracion/sistemas/sistemas.component';
import { ModulosComponent } from 'src/app/pages/principal/administracion/modulos/modulos.component';
import { CanalesComponent } from 'src/app/pages/principal/administracion/canales/canales.component';
import { OperacionesComponent } from 'src/app/pages/principal/administracion/operaciones/operaciones.component';
import { PrincipalComponent } from '../../pages/principal/principal.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'principal',
        component: PrincipalComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'buscador',
        component: BuscadorComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'configurar',
        component: ConfigurarComponent,
        canActivate: [AuthGuardGuard]
    }, {
        path: 'reportes',
        component: ReportesComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'administracion',
        component: AdministracionComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'sistemas',
        component: SistemasComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'modulos',
        component: ModulosComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'canales',
        component: CanalesComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'operaciones',
        component: OperacionesComponent,
        canActivate: [AuthGuardGuard]
    },

];
