package chessequality.kt.rumble.controller

import io.micronaut.context.ApplicationContext
import io.micronaut.http.client.HttpClient
import io.micronaut.runtime.server.EmbeddedServer
import org.junit.jupiter.api.Assertions.assertEquals
import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe

object HelloControllerSpec: Spek({

    describe("HelloController Suite") {

        var embeddedServer : EmbeddedServer = ApplicationContext.run(EmbeddedServer::class.java)
        var client : HttpClient = HttpClient.create(embeddedServer.url)

        it("test /hello responds Hello Micronaut!") {

            var rsp : String = client.toBlocking().retrieve("/hello")
            assertEquals(rsp, "Hello Micronaut!")
        }

        afterGroup {
            client.close()
            embeddedServer.close()
        }
    }
})