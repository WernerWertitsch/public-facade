package corp.acme.publicfacade.functions.mock;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import corp.acme.common.domain.Classification;
import corp.acme.common.domain.ClassificationRequest;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

public class MockGetClassificationsFor implements Function<ClassificationRequest, List<Classification>> {


    @Override
    public List<Classification> apply(ClassificationRequest classificationRequest) {
        return MockGetClassificationsFor.createMockClassifications(1);
    }

    public static List<Classification> createMockClassifications(int sets) {
        ObjectMapper objectMapper = new ObjectMapper();
        // this is not pretty
        List<Classification> ret = new ArrayList<>();
        for(int i=0; i<sets; i++) {
            try {
                ret.add(objectMapper.readValue(
                        "[{''id':'d86565ad-2645-477e-XXXX-88f9f5c85203','name':'1,3,5-Triamino-2,4,6-trinitrobenzeneXXXX'," +
                                "'category':{'id':'CATEGORY-4','name':'Explosive','description':'Danger Level 4'}}".replaceAll("XXXX", i+""), Classification.class));
                ret.add(objectMapper.readValue(
                        "{'id':'eb6c36fd-d40b-4f53-XXXX-038db9fa2cfa','name':'1-Tri (cyclohexyl) stannyl-1H-1,2,4-triazoleXXXX'," +
                                "'category':{'id':'CATEGORY-1','name':'Toxic','description':'Danger Level 1'}}".replaceAll("XXXX", i+""), Classification.class));
                ret.add(objectMapper.readValue(
                        "{'id':'9af7e916-e784-431a-XXXX-ae088ba09390','name':'2,3,7,8-Tetrachlorodibenzo-p-dioxin (TCDD)XXXX'," +
                                "'category':{'id':'CATEGORY-1','name':'Toxic','description':'Danger Level 1'}}]".replaceAll("XXXX", i+""), Classification.class));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        }
        return ret;
    }

}
