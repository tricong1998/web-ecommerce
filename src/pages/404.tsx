import { HeaderViewOnly } from "@/components/layout/header/header-view-only";
import { Layout404 } from "@/modules/errors";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";

export default function Error404() {
    const {t} = useTranslation()
    return (
        <div className="h-screen flex-col lg:flex-row">
            <NextSeo title={t`errors.title` as string}></NextSeo>
            <HeaderViewOnly className=""></HeaderViewOnly>
            <Layout404></Layout404>
        </div>
    )
}