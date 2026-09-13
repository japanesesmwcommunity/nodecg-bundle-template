import type NodeCG from "@nodecg/types";
import type {Configschema} from "../types/generated/configschema";
import type {Example} from "../types/generated/example";

export const example = (nodecg: NodeCG.ServerAPI<Configschema>) => {
	const exampleRep = nodecg.Replicant<Example>("example");

	setInterval(() => {
		if (!exampleRep.value) return;
		exampleRep.value.count++;
		nodecg.log.info(`Count: ${exampleRep.value.count}`);
	}, 1000);
};
