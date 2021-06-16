import { initializeApollo } from 'utils/apollo'
import { GetStaticPropsContext } from 'next'
import useTranslation from 'next-translate/useTranslation'

import TemplateHome, { HomeProps } from 'templates/TemplateHome'
import { GET_HOME } from 'graphql/queries/home'
import { GetHome_colecaoModalidades } from 'graphql/generated/GetHome'

export default function Home(props: HomeProps) {
  const { t } = useTranslation('common')

  return (
    <>
      <TemplateHome
        siteNameFirst={t('siteNameFirst')}
        siteNameLast={t('siteNameLast')}
        noticeAlertIcon={props.noticeAlertIcon}
        noticeAlertTitle={props.noticeAlertTitle}
        noticeAlertSlug={props.noticeAlertSlug}
        cardsModalities={props.cardsModalities}
        InstitutionalTitle={props.InstitutionalTitle}
        InstitutionalSubtitle={props.InstitutionalSubtitle}
        InstitutionalText={props.InstitutionalText}
        InstitutionalLink={props.InstitutionalLink}
      />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: GET_HOME,
    variables: {
      locale: locale
    }
  })

  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
      noticeAlertIcon: `http://localhost:1337${data.paginaHome.Aviso_Home.Icon.url}`,
      noticeAlertTitle: data.paginaHome.Aviso_Home.Title,
      noticeAlertSlug: data.paginaHome.Aviso_Home.aviso.slug,
      cardsModalities: data.colecaoModalidades.map(
        (card: GetHome_colecaoModalidades) => ({
          tone: card.Color,
          link: card.slug,
          icon: `http://localhost:1337${card.Icon?.url}`,
          title: card.Title,
          subtitle: card.Subtitle,
          text: card.Text
        })
      ),
      InstitutionalTitle: data.paginaInstitucional.Title.Title,
      InstitutionalSubtitle: data.paginaInstitucional.Title.Subtitle,
      InstitutionalText: data.paginaInstitucional.Title.Text,
      InstitutionalLink: data.paginaInstitucional.Video,
      InstitutionalTour: {
        Asa_Sul: data.paginaInstitucional.Tour.Asa_Sul,
        Asa_Norte: data.paginaInstitucional.Tour.Asa_Norte
      }
    }
  }
}
