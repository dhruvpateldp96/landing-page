import { Features } from "./components/features";
import { Offerings } from "./components/offerings";
import { Testimonials } from "./components/testimonials";

export const ComponentsEnum = {
    StudentComponent: "StudentComponent",
    InstituteComponent: "InstituteComponent",
};

export const renderMap = ({landingPageData, changeState}) => ({
    [ComponentsEnum.StudentComponent]: (
        <>
            <Features data={landingPageData?.Features?.Student} changeState={changeState} student/>
            <Offerings data={landingPageData?.Offerings?.Student} student/>
            <Testimonials data={landingPageData?.Testimonials} student/>
        </>
    ),
    [ComponentsEnum.InstituteComponent]: (
        <>
            <Features data={landingPageData?.Features?.Institute} changeState={changeState} institute/>
            <Offerings data={landingPageData?.Offerings?.Institute} institute/>
            <Testimonials data={landingPageData?.Testimonials} institute/>
        </>
    )
})