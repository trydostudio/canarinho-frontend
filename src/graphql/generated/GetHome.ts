/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COLECAOMODALIDADES_COLOR } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetHome
// ====================================================

export interface GetHome_paginaHome_Title {
  __typename: "ComponentTitlePageTitulo";
  Title: string | null;
  Subtitle: string | null;
}

export interface GetHome_paginaHome_Aviso_Home_Icon {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_paginaHome_Aviso_Home_aviso {
  __typename: "ColecaoAvisos";
  slug: string | null;
}

export interface GetHome_paginaHome_Aviso_Home {
  __typename: "ComponentNoticeNotice";
  Icon: GetHome_paginaHome_Aviso_Home_Icon | null;
  Title: string | null;
  aviso: GetHome_paginaHome_Aviso_Home_aviso | null;
}

export interface GetHome_paginaHome {
  __typename: "PaginaHome";
  Title: GetHome_paginaHome_Title | null;
  Aviso_Home: GetHome_paginaHome_Aviso_Home | null;
}

export interface GetHome_colecaoModalidades_Icon {
  __typename: "UploadFile";
  url: string;
}

export interface GetHome_colecaoModalidades {
  __typename: "ColecaoModalidades";
  Color: ENUM_COLECAOMODALIDADES_COLOR | null;
  slug: string | null;
  Icon: GetHome_colecaoModalidades_Icon | null;
  Title: string | null;
  Subtitle: string | null;
  Text: string | null;
}

export interface GetHome_paginaInstitucional_Title {
  __typename: "ComponentTitlePageTitulo";
  Title: string | null;
  Subtitle: string | null;
  Text: string | null;
}

export interface GetHome_paginaInstitucional_Tour {
  __typename: "ComponentTourVirualTourVirtual";
  Asa_Sul: string | null;
  Asa_Norte: string | null;
}

export interface GetHome_paginaInstitucional {
  __typename: "PaginaInstitucional";
  Title: GetHome_paginaInstitucional_Title | null;
  Video: string | null;
  Tour: GetHome_paginaInstitucional_Tour | null;
}

export interface GetHome_colecaoDepoimentos {
  __typename: "ColecaoDepoimentos";
  Text: string | null;
  Name: string | null;
}

export interface GetHome_colecaoFuncionamentos {
  __typename: "ColecaoFuncionamento";
  slug: string | null;
  Title: string | null;
  Text: string | null;
}

export interface GetHome {
  paginaHome: GetHome_paginaHome | null;
  colecaoModalidades: GetHome_colecaoModalidades[];
  paginaInstitucional: GetHome_paginaInstitucional | null;
  colecaoDepoimentos: GetHome_colecaoDepoimentos[];
  colecaoFuncionamentos: GetHome_colecaoFuncionamentos[];
}

export interface GetHomeVariables {
  locale?: string | null;
}
