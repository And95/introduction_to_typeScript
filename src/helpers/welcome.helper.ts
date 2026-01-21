import GetRequest from "../dtos/get.request";
import AgeHelper from "./age.helper";

export default class WelcomeHelper {
  static createMenssage(input: GetRequest): string {
    let Menssage = "Boas vindas, ";

    if (input.name && input.name.trim().length > 0) {
      Menssage = Menssage + input.name;
    } else {
      Menssage = Menssage + "Visitante";
    }
    if (input.age) {
      const isAdult = AgeHelper.isAdult(input.age);
      isAdult
        ? (Menssage = Menssage + ", você é maior de idade.")
        : (Menssage = Menssage + ", você é menor de idade.");
    } else {
      Menssage = Menssage + ", não consegui identificar sua idade.";
    }
    return Menssage;
  }
}
