import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'system',
        loadComponent: ( ) => import('./system/system.component').then(m => m.SystemComponent),
        children:[
            {
                path: '',
                redirectTo: 'home',pathMatch: 'full',
            },
            {
                path: 'home',
                title: 'Inicio',
                loadComponent: ( ) => import('./system/pages/home/home.component').then(m => m.HomeComponent),
            },
            {
                path: 'datosDef',
                title: 'Datos Def',
                loadComponent: ( ) => import('./system/pages/consulta-datos-def/consulta-datos-def.component').then(m => m.ConsultaDatosDefComponent),
            },
            {
                path: 'datosDefCurp',
                title: 'Datos Def Curp',
                loadComponent: ( ) => import('./system/pages/consulta-datos-def-curp/consulta-datos-def-curp.component').then(m => m.ConsultaDatosDefCurpComponent),
            },
            {
                path: 'datosMat',
                title: 'Datos Mat',
                loadComponent: ( ) => import('./system/pages/consulta-datos-mat/consulta-datos-mat.component').then(m => m.ConsultaDatosMatComponent),
            },
            {
                path: 'datosMatCurp',
                title: 'Datos Mat Curp',
                loadComponent: ( ) => import('./system/pages/consulta-datos-mat-curp/consulta-datos-mat-curp.component').then(m => m.ConsultaDatosMatCURPComponent),
            },
            {
                path: 'datosNac',
                title: 'Datos Nac',
                loadComponent: ( ) => import('./system/pages/consulta-datos-nac/consulta-datos-nac.component').then(m => m.ConsultaDatosNacComponent),
            },
            {
                path: 'datosNacCurp',
                title: 'Datos Nac Curp',
                loadComponent: ( ) => import('./system/pages/consulta-datos-nac-curp/consulta-datos-nac-curp.component').then(m => m.ConsultaDatosNacCurpComponent),
            },
            {
                path: 'defCurp',
                title: 'Datos def Curp',
                loadComponent: ( ) => import('./system/pages/consulta-def-curp/consulta-def-curp.component').then(m => m.ConsultaDefCURPComponent),
            },
            {
                path: 'defDg',
                title: 'Datos def Dg',
                loadComponent: ( ) => import('./system/pages/consulta-def-dg/consulta-def-dg.component').then(m => m.ConsultaDefDGComponent),
            },
            {
                path: 'matCurp',
                title: 'Datos matCurp',
                loadComponent: ( ) => import('./system/pages/consulta-mat-curp/consulta-mat-curp.component').then(m => m.ConsultaMatCURPComponent),
            },
            {
                path: 'matDg',
                title: 'Datos matDg',
                loadComponent: ( ) => import('./system/pages/consulta-mat-dg/consulta-mat-dg.component').then(m => m.ConsultaMatDGComponent),
            },

        ]
    },
    {
        path: '',
        redirectTo: '/system',
        pathMatch: 'full'
    }
];
