// Cookie data struct.
//
const Cookie = export.module = function(k, v,timeout) {
    this.Key = k;
    this.Value = v;
		this.Timeout = timeout;
}
