package corp.acme.publicfacade.functions.mock;

import corp.acme.common.domain.Product;
import corp.acme.common.domain.ProductRequest;
import corp.acme.publicfacade.FacadeService;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;
import java.util.Date;
import java.util.function.Function;

public class GetProductMock implements Function<ProductRequest, Product> {
    @Autowired
    FacadeService facadeService;

    @Override
    public Product apply(ProductRequest productRequest) {
        Product mock = new Product();
        mock.setFeePrct(Math.random()+Math.random()*10);
        mock.setPremium(productRequest.getValue().multiply(new BigDecimal(mock.getFeePrct())));
        mock.setClassification(productRequest.getClassification());
        mock.setInsured(false);
        mock.setInsuredFrom(new Date());
        mock.setCancelled(false);
        return mock;
    }
}
