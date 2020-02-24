package corp.acme.publicfacade.functions.mock;

import corp.acme.common.domain.Classification;

import java.util.List;
import java.util.function.Supplier;

public class GetAllClassificationsMock implements Supplier<List<Classification>> {

    @Override
    public List<Classification> get() {
        return GetClassificationsForMock.createMockClassifications(4);
    }

}
