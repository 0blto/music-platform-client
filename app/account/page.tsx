"use client"

import Button from "@/components/Button";
import Header from "@/components/Header";
import useNewReleaseModal from "@/hooks/useNewReleaseModal";




const Account = async () => {

  const newReleaseModal = useNewReleaseModal();

    return (
      <div 
      className="
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Account
          </h1>
        </div>
        <div>
          <Button onClick={newReleaseModal.onOpen}>
            New release
          </Button>
        </div>
      </Header>
    </div>
      );
}

export default Account;