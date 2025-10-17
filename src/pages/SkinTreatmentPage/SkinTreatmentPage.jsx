import { images } from "@/assets/imgs";
import OutstandingService from "@/components/OutstandingService";

function SkinTreatmentPage() {
  return (
    <div>
      <div>
        <img src={images?.bannerDermatologist} alt="" />

        {/* Cavs dịch vụ nổi bật tại MAILISA */}
        <OutstandingService  />
      </div>
    </div>
  );
}

export default SkinTreatmentPage;
