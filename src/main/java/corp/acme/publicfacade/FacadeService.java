package corp.acme.publicfacade;

import corp.acme.common.domain.*;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import corp.acme.common.util.ServiceCall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.net.URI;
import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;

@Service
public class FacadeService {


    Logger logger = Logger.getLogger("FacadeService");

    @Autowired
    DiscoveryClient discoveryClient;

    public List<Classification> fetchClassifications(List<String> substanceNames){
        URI uri = this.discoveryClient.getInstances("PRODUCTS").get(0).getUri();
        ClassificationRequest body = new ClassificationRequest();
        body.setSubstanceNames(substanceNames);
        WebClient.RequestHeadersSpec call = ServiceCall.buildDefaultJsonCall(uri, "getClassifications", body);
        return call.retrieve().toEntity(List.class).block().getBody();
    }

    public List<Classification> fetchAllClassifications() {
        URI uri = this.discoveryClient.getInstances("PRODUCTS").get(0).getUri();
        WebClient.RequestHeadersSpec call = ServiceCall.buildDefaultGetCall(uri, "getAllClassifications");
        return call.retrieve().toEntity(List.class).block().getBody();
    }

    public Product getProduct(ProductRequest productRequest){
        URI uri = this.discoveryClient.getInstances("PRODUCTS").get(0).getUri();
        WebClient.RequestHeadersSpec call = ServiceCall.buildDefaultJsonCall(uri, "getProduct", productRequest);
        return call.retrieve().toEntity(Product.class).block().getBody();
    }
}
