package corp.acme.publicfacade.functions.mock;

import corp.acme.common.domain.Classification;
import corp.acme.publicfacade.FacadeService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.function.Supplier;

public class MockGetAllClassifications implements Supplier<List<Classification>> {

    @Override
    public List<Classification> get() {
        return MockGetClassificationsFor.createMockClassifications(4);
    }

}
