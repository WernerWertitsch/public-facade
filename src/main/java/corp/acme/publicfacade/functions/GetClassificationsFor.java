package corp.acme.publicfacade.functions;

import corp.acme.common.domain.Classification;
import corp.acme.common.domain.ClassificationRequest;
import corp.acme.publicfacade.FacadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.util.List;
import java.util.function.Function;

public class GetClassificationsFor implements Function<ClassificationRequest, List<Classification>> {
    @Value( "${frontend-dev-mode}" )
    private boolean frontendDevMode = false;

    @Autowired
    FacadeService facadeService;

    @Override
    public List<Classification> apply(ClassificationRequest classificationRequest) {
        return this.facadeService.fetchClassifications(classificationRequest.getSubstanceNames());
    }
}
