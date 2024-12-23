import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex-col lg:flex-row flex h-full w-full">
        <div className="block lg:hidden">
          <Navbar />
        </div>
  
        <div className="hidden lg:flex w-[242px] sticky top-0 left-0 h-screen flex-col bg-white border border-[#E9EAEB]">
          <Sidebar />
        </div>
  
        <div className="min-h-screen bg-[#FAFAFA] pt-16 lg:pt-0 h-full w-full">
          <div className="lg:p-6 h-full lg:max-w-screen-xl 2xl:mx-auto w-full">
            {children}
          </div>
        </div>

      </div>
    );
  };
  
  export default DashboardLayout;