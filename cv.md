# Astromind

## 1. Finetunning an LLM to answer questions on chandra telescope event files
  Fine tunning llms starting with GPT Neo then Llama, QWEN 7B etc. to make the llm familiar with the event data embeddings. This was a RnD project that I worked alone spanning several months to fine tune an LLM to answer any question when a chandra xray observatory event list(time, energy) is provided. The challenge is we are introducing a completely different input space to a trained LLM. So we have to train an encoder to encode this input space to the same embedding space of the llm. We employed few different approaches to this based on the flamingo architecture for finetunning llms.

  python, pytorch, huggingface, openai, 

## 2. Contrastive Learning to create a shared embedding space between chandra event data and research papers

  This was a joined project alongside the cfa, harvard on using contrastive learning to align the event data from chandra observatory to a text embedding space from research papers on each source observation. This common embedding space can be used as an encoder to a LLM to get an embedding from a raw event data file.

 python, pytorch, huggingface, openai, 

## 3. Lium Platform

  A RAG based platform that use different defined tools including finetuned LLMs and sandboxed python executions to extract intelligence from complex datasets like multi dimension and multi variate time series data. Working with a good team to develop this application. 

  python, golang, pulumi, aws, nextjs