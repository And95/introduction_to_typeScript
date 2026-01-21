import PostRequest from "../dtos/post.request";
import PostResponse from "../dtos/post.response";
import IdadeHelper from "../helpers/age.helper";
import DataHelper from "../helpers/date.helper";

export default class PostHandler {
  static buildResponse(input: PostRequest): PostResponse {
    const response: PostResponse = {
      id: Math.random().toString(),
      name: input.name,
      email: input.email,
      isAdult: IdadeHelper.isAdult(input.age),
      registrationDate: DataHelper.obterDataAgora(),
    };
    return response;
  }
}
