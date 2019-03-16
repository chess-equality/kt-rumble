package chessequality.kt.rumble.controller

import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.Produces

@Controller("/")
class MainController {

    @Get("/{name}")
    @Produces(MediaType.TEXT_PLAIN)
    fun greetName(name: String): HttpResponse<String> {
        return HttpResponse.ok("Hello, $name!")
    }
}
