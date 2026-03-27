import CakeBakingStepOne from "../interfaces/CakeBakingStepOne";
import CakeBakingStepTwo from "../interfaces/CakeBakingStepTwo";
import CakePackingStep from "../interfaces/CakePackingInterface";

class RedvelvetCake
  implements CakeBakingStepOne, CakeBakingStepTwo, CakePackingStep
{
  step1(): number {
    console.log("Mixing the dry ingredients for the Red Velvet Cake.");
    return 1; // Indicates step 1 is completed
  }

  step2(): number {
    console.log("Adding wet ingredients and mixing the batter.");
    return 2; // Indicates step 2 is completed
  }

  pack(): number {
    console.log("cake packing completed.");
    return 3; // Indicates packing is completed
  }
}
