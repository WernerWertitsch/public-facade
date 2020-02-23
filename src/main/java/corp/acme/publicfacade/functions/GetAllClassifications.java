package corp.acme.publicfacade.functions;

import com.netflix.discovery.DiscoveryClient;
import corp.acme.common.domain.Classification;
import corp.acme.publicfacade.FacadeService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.function.Supplier;

public class GetAllClassifications implements Supplier<List<Classification>> {
    @Autowired
    FacadeService facadeService;

    @Override
    public List<Classification> get() {
        return this.facadeService.fetchAllClassifications();
    }

}
