package corp.acme.publicfacade;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class PublicFacadeApplication {

    public static void main(String[] args) {
        SpringApplication.run(PublicFacadeApplication.class, args);
    }

}
