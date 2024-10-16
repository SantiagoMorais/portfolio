import { Banner } from "@components/blog/banner"
import { CertificatesCarouselSlides } from "@utils/lists"

export const CertificatesSection = () => {
    return (
        <div>
            <Banner imagesList={CertificatesCarouselSlides} title="Certificados" subtitle="Verifique minha jornada na programação, cursos concluídos e certificados emitidos!"/>
        </div>
    )
}