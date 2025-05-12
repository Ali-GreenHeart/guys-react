import { Route, Routes } from "react-router"
import { lazy, Suspense } from "react"
const AboutPage = lazy(() => import("../pages/About"))
const HomePage = lazy(() => import("../pages/Home"))
const ContactPage = lazy(() => import("../pages/Contact"))
const LandingContentWrapper = lazy(() => import("../components/layout/LandingContentWrapper"))
const DashboardContentWrapper = lazy(() => import("../components/layout/DashboardContentWrapper"))
const AliGithubContentWrapper = lazy(() => import("../components/layout/AliGithubContentWrapper"))

// github pages
const AliGithub = lazy(() => import("../pages/AliGithub"))
const AliFollowers = lazy(() => import("../pages/AliGithub/Followers"))
const AliRepos = lazy(() => import("../pages/AliGithub/Repos"))

const WebRouting = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route Component={LandingContentWrapper}>
                    <Route path="/" Component={HomePage} />
                    <Route path="/about" Component={AboutPage} />
                    <Route path="/contact" element={<ContactPage />} />
                </Route>
                <Route Component={DashboardContentWrapper}>
                    {/* nested routes */}
                    <Route path="/dashboard" element={<div>dashboard page</div>} />
                </Route>
                <Route path="ali-github" Component={AliGithubContentWrapper}>
                    <Route path="" Component={AliGithub} />
                    <Route path="followers" Component={AliFollowers} />
                    <Route path="repos" Component={AliRepos} />
                </Route>
            </Routes>
        </Suspense>
    )
}
export default WebRouting
