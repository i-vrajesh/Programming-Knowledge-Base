import java.io.File;
import java.io.FileReader;
import java.util.HashMap;
import java.util.Map;

public class RestAssured{
    // void getUsers(){
    //     given()
    //     .when()
    //         .get("https://reqres.in/api/users?page=2")
    //     .then()
    //         .statusCode(200)
    //         .body("page",equalTo(2))
    //         .log().all();
    // }
    
// void responseValidation(){
//     Response res = 
//     given()
//         .contentType(ContentType.JSON)
//     .when
//         .get("nttp://localhost:3000/store");
//     //converting res to JsonObj type
//     JSONObject jObj = new JSONObject(res.toString());
//     Double price =0;
//     for(int i=0; i<jObj.getJSONArray("book").length();i++){
//         String bookTitle = jObj.getJSONArray("book").getJSONObject(i).get("title").toString();
//         String bookPrice = jObj.getJSONArray("book").getJSONObject(i).get("price").toString();
// //using jObj getting bookArray title with index i and converting toString 
//         System.out.println(price+Double.parseDouble(bookPrice));//converting string to Double
//         System.out.println(bookTitle);
//     }   // Assert.assertEquals(res.getStatusCode(),200);
//         // Assert.assertEquals(res.header("Content-Type"),"application/json; charset=uft-8");
//         // String bookname = res.jsonPath().get("book[3].title").toString();
//         // //getting book3 title and storing it as a string in var
//         // Assert.assertEquals(bookname,"The LORD");

//     }

    // void FileUpload(){
    //     File myFile1 = new File(../folder/test1.txt);
    //     File myFile2 = new File(../folder/test2.txt);
    //     given()
    //         .multiPart("files",myFile1)//multiPart is inbuild method which represents form data in postman
    //         .multiPart("files",myFile2)
    //         .contentType("multipart/form-data")//content type is mandatory
    //     .when()
    //         .post("http://localhost:8080/uploadFiles")
    //     .then()
    //         .statusCode(200);
    // }

    void convertJSONtoPOJO(){
        String jsondata = "{\r\n"
            + " \"name\" : \"John\""
            +"}";
        ObjectMapper objMapper = new ObjectMapper();
        //De-serialization
        Student studentPOJO = objMapper.readValue(jsondata,Student.class);
    }
}