import RepoHeader from "@/components/RepoHeader";
import Repository from "@/components/Repository";
import { repoData } from "@/lib/repo.seed";
import React from "react";

const Dashboard = () => {
    return (
        <main>
            <div className="flex flex-col border lg:rounded-xl border-[#E9EAEB]">
                <RepoHeader />
                {repoData.map((repo, index) => (
                    <React.Fragment key={repo.id}>
                        <Repository 
                            index={index}
                            title={repo.title}
                            visibility={repo.visibility}
                            techStack={repo.techStack}
                            repoSize={repo.size}
                            lastUpdated={repo.lastUpdated}
                            maxLength={repoData.length}
                        />
                    </React.Fragment>
                ))}
            </div>
        </main>
    )
}

export default Dashboard;