import { Quill } from "@vueup/vue-quill";
const Embed = Quill.import("blots/embed");

class ProcLink extends Embed {
	static create(value) {
		let node = super.create(value);
		// give it some margin
		node.innerHTML = value.text;
		node.addEventListener("click", () => node.remove());
		return node;
	}
}

export default ProcLink;
