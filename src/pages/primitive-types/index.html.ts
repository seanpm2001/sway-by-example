// metadata
export const version = "0.8.13"
export const title = "Primitive Types"
export const description = "Primitive types in Sway"
export const codes = [
  {
    fileName: "primitives",
    code: "Y29udHJhY3Q7CgovLyBQcmltaXRpdmUgdHlwZXMKLy8gLSBVbnNpZ25lZCBpbnRlZ2VycwovLyAtIEZpeGVkIGxlbmd0aCBzdHJpbmcKLy8gLSBCb29sZWFuCi8vIC0gMjU2IGJpdHMgPSAzMiBieXRlcwoKYWJpIE15Q29udHJhY3QgewogICAgZm4gdGVzdF9mdW5jKCkgLT4gYm9vbDsKfQoKaW1wbCBNeUNvbnRyYWN0IGZvciBDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMoKSAtPiBib29sIHsKICAgICAgICAvLyBVbnNpZ25lZCBpbnRlZ2VycwogICAgICAgIC8vIDAgPD0gdTggPD0gMioqOCAtIDEKICAgICAgICBsZXQgdV84OiB1OCA9IDEyMzsKICAgICAgICAvLyAwIDw9IHUxNiA8PSAyKioxNiAtIDEKICAgICAgICBsZXQgdV8xNjogdTE2ID0gMTIzOwogICAgICAgIC8vIDAgPD0gdTMyIDw9IDIqKjMyIC0gMQogICAgICAgIGxldCB1XzMyOiB1MzIgPSAxMjM7CiAgICAgICAgLy8gMCA8PSB1NjQgPD0gMioqNjQgLSAxCiAgICAgICAgbGV0IHVfNjQ6IHU2NCA9IDEyMzsKCiAgICAgICAgbGV0IHVfNjRfbWF4ID0gdTY0OjptYXgoKTsKCiAgICAgICAgLy8gRml4ZWQgbGVuZ3RoIHN0cmluZwogICAgICAgIGxldCBzOiBzdHJbNF0gPSAiZnVlbCI7CiAgICAgICAgLy8gQm9vbGVhbgogICAgICAgIGxldCBib286IGJvb2wgPSB0cnVlOwogICAgICAgIC8vIDI1NiBiaXRzID0gMzIgYnl0ZXMKICAgICAgICBsZXQgYl8yNTY6IGIyNTYgPSAweDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTE7CgogICAgICAgIHRydWUKICAgIH0KfQ==",
  },
]

const html = `<p>Examples of primitive data types in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Primitive types</span>
<span class="hljs-comment">// - Unsigned integers</span>
<span class="hljs-comment">// - Fixed length string</span>
<span class="hljs-comment">// - Boolean</span>
<span class="hljs-comment">// - 256 bits = 32 bytes</span>

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">bool</span>;
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">bool</span> {
        <span class="hljs-comment">// Unsigned integers</span>
        <span class="hljs-comment">// 0 &lt;= u8 &lt;= 2**8 - 1</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">u_8</span>: <span class="hljs-type">u8</span> = <span class="hljs-number">123</span>;
        <span class="hljs-comment">// 0 &lt;= u16 &lt;= 2**16 - 1</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">u_16</span>: <span class="hljs-type">u16</span> = <span class="hljs-number">123</span>;
        <span class="hljs-comment">// 0 &lt;= u32 &lt;= 2**32 - 1</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">u_32</span>: <span class="hljs-type">u32</span> = <span class="hljs-number">123</span>;
        <span class="hljs-comment">// 0 &lt;= u64 &lt;= 2**64 - 1</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">u_64</span>: <span class="hljs-type">u64</span> = <span class="hljs-number">123</span>;

        <span class="hljs-keyword">let</span> <span class="hljs-variable">u_64_max</span> = <span class="hljs-type">u64</span>::<span class="hljs-title function_ invoke__">max</span>();

        <span class="hljs-comment">// Fixed length string</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">s</span>: <span class="hljs-type">str</span>[<span class="hljs-number">4</span>] = <span class="hljs-string">"fuel"</span>;
        <span class="hljs-comment">// Boolean</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">boo</span>: <span class="hljs-type">bool</span> = <span class="hljs-literal">true</span>;
        <span class="hljs-comment">// 256 bits = 32 bytes</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">b_256</span>: b256 = <span class="hljs-number">0x1111111111111111111111111111111111111111111111111111111111111111</span>;

        <span class="hljs-literal">true</span>
    }
}
</code></pre>
`

export default html
