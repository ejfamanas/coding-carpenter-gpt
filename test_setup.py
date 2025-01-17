from transformers import GPT2Tokenizer, GPT2LMHeadModel

# Load pre-trained tokenizer and model
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")

# Tokenize and generate text
inputs = tokenizer("Hello, how are you?", return_tensors="pt")
outputs = model.generate(inputs["input_ids"], max_length=50, num_return_sequences=1)

print(tokenizer.decode(outputs[0], skip_special_tokens=True))