package corp.acme.publicfacade.functions;

import corp.acme.common.domain.Classification;
import corp.acme.common.domain.Product;
import corp.acme.common.domain.ProductRequest;
import corp.acme.publicfacade.FacadeService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.function.Function;

public class GetProduct implements Function<ProductRequest, Product> {
    @Autowired
    FacadeService facadeService;

    @Override
    public Product apply(ProductRequest productRequest) {
        return this.facadeService.getProduct(productRequest);
    }
}
