package corp.acme.publicfacade.functions;

import corp.acme.common.domain.Classification;
import corp.acme.publicfacade.FacadeService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.function.Function;

public class GetClassificationsFor implements Function<List<String>, List<Classification>> {
    @Autowired
    FacadeService facadeService;

    @Override
    public List<Classification> apply(List<String> substanceNames) {
        return this.facadeService.fetchClassifications(substanceNames);
    }
}
